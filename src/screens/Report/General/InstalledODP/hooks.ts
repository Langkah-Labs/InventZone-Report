import { useState, useEffect } from "react";
// dependencies
import { mock_data } from "../../../../utils/constants";
import { graphqlRequest } from "../../../../utils/graphql";

const countAllProductsQuery = `
  query CountProductSerials {
    product_serials_aggregate {
      aggregate {
        count
      }
    }
  }
`;

const countInstalledProductQuery = `
query GetInstalledProductSerialsCount {
  product_serials_aggregate(where: { installed_at: { _is_null: false } }) {
    aggregate {
      count
    }
  }
}
`;

const getInstalledProductQuery = `
query GetAverageInstalledPerDay {
  product_serials(where: { installed_at: { _is_null: false } }) {
    installed_at
  }
}
`;

const getCapacity = `
query GetCapacityProduct {
  product_serials {
    capacity_remaining
  }
}
`;

const findAllProductsQuery = `
  query GetProductSerials {
    product_serials {
      capacity
      capacity_remaining
      id
      port_id
      product_id
      attachment
      latitude
      longitude
      optical_power
      serial_number
      description
      created_at
      installed_at
      updated_at
    }
  }
`;
interface DataType {
  key: string;
  no: number;
  serial_number: string;
  capacity: number;
  capacity_remaining: number
  optical_power: string;
  installed_at: string;
  latitude: string;
  longitude: string;
}

export const useInstalledODP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalProduct, setTotalProduct] = useState<number>(0);
  const [totalInstalled, setTotalInstalled] = useState<number>(0);
  const [avgInstalled, setAvgInstalled] = useState<number>(0);
  const [classificationData, setClassificationData] = useState<Array<any>>([]);
  const [mapData, setMapData] = useState<DataType[]>([]);

  useEffect(() => {
    setIsLoading(false);
    const fetch = async () => {
      setIsLoading(true);
      // query data
      const resAll = await graphqlRequest.request<any>(
        countAllProductsQuery,
        {}
      );
      const resInstalled = await graphqlRequest.request<any>(
        countInstalledProductQuery,
        {}
      );
      const resAvg = await graphqlRequest.request<any>(
        getInstalledProductQuery,
        {}
      );
      const resCapacity = await graphqlRequest.request<any>(getCapacity, {});
      const resMap = await graphqlRequest.request<any>(
        findAllProductsQuery,
        {}
      );
      // store the data
      if (resAll) {
        setTotalProduct(resAll.product_serials_aggregate.aggregate.count);
        setIsLoading(false);
      }
      if (resInstalled) {
        setTotalInstalled(
          resInstalled.product_serials_aggregate.aggregate.count
        );
      }
      if (resAvg) {
        // Mengelompokkan tanggal instalasi berdasarkan hari
        const groupedByDay = {};
        resAvg.product_serials.forEach((item) => {
          const installationDate = new Date(
            item.installed_at
          ).toLocaleDateString();
          if (!groupedByDay[installationDate]) {
            groupedByDay[installationDate] = 0;
          }
          groupedByDay[installationDate]++;
        });

        // Menghitung rata-rata instalasi per hari
        let totalInstalls = 0;
        const installationDates = Object.keys(groupedByDay);
        installationDates.forEach((date) => {
          totalInstalls += groupedByDay[date];
        });
        const averageInstallsPerDay = totalInstalls / installationDates.length;
        setAvgInstalled(averageInstallsPerDay);
      }
      if (resCapacity) {
        // Inisialisasi variabel untuk menyimpan hasil klasifikasi
        const classification = {
          "High Port": 0,
          "Medium Port": 0,
          "Low Port": 0,
        };
        // Melakukan klasifikasi berdasarkan kondisi capacity_remaining
        resCapacity.product_serials.forEach((item) => {
          const capacityRemaining = item.capacity_remaining;
          if (capacityRemaining > 8) {
            classification["High Port"]++;
          } else if (capacityRemaining < 8 && capacityRemaining >= 4) {
            classification["Medium Port"]++;
          } else if (capacityRemaining < 4) {
            classification["Low Port"]++;
          }
        });
        // Mengkonversi hasil klasifikasi menjadi format yang diinginkan
        const result = Object.keys(classification).map((key) => ({
          name: key,
          value: classification[key],
        }));
        setClassificationData(result);
      }
      if (resMap) {
        setMapData(resMap.product_serials);
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return {
    totalProduct,
    totalInstalled,
    avgInstalled,
    classificationData,
    isLoading,
    mapData,
  };
};

export default useInstalledODP;
