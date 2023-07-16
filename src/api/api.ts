import { Client as Appwrite, Databases, Account } from "appwrite";
import { Server } from "../utils/config";

let api: any = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite
      .setEndpoint(Server.endpoint ? Server.endpoint : "")
      .setProject(Server.project ? Server.project : "");
    const account = new Account(appwrite);
    const database = new Databases(appwrite);

    api.sdk = { database, account };
    return api.sdk;
  },

  createAccount: (email: any, password: any, name: any) => {
    return api.provider().account.create("unique()", email, password, name);
  },

  getAccount: () => {
    let account = api.provider().account;
    return account.get();
  },

  createSession: (email: any, password: any) => {
    return api.provider().account.createEmailSession(email, password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  },

  createDocument: (
    databaseId: any,
    collectionId: any,
    documentId: any,
    data: any
  ) => {
    return api
      .provider()
      .database.createDocument(databaseId, collectionId, documentId, data);
  },

  listDocuments: (databaseId: any, collectionId: any) => {
    return api.provider().database.listDocuments(databaseId, collectionId);
  },

  updateDocument: (
    databaseId: any,
    collectionId: any,
    documentId: any,
    data: any
  ) => {
    return api
      .provider()
      .database.updateDocument(databaseId, collectionId, documentId, data);
  },

  deleteDocument: (databaseId: any, collectionId: any, documentId: any) => {
    return api
      .provider()
      .database.deleteDocument(databaseId, collectionId, documentId);
  },
};

export default api;
