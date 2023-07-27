import { Client as Appwrite, Databases, Account, Teams } from "appwrite";
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
    const teams = new Teams(appwrite);

    api.sdk = { database, account, teams };
    return api.sdk;
  },

  createAccount: (email: any, password: any, name: any) => {
    return api.provider().account.create("unique()", email, password, name);
  },

  updatePassword: (password: any) => {
    return api.provider().account.create(password);
  },

  getAccount: () => {
    let account = api.provider().account;
    return account.get();
  },

  createSession: (email: any, password: any) => {
    return api.provider().account.createEmailSession(email, password);
  },

  getSession: () => {
    return api.provider().account.getSession("current");
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  },

  create: (teamsName: any) => {
    return api.provider().teams.create("unique()", teamsName);
  },

  list: () => {
    return api.provider().teams.list();
  },

  get: (teamsId: any) => {
    return api.provider().teams.get(teamsId);
  },

  updateName: (teamsId: any, teamsName: any) => {
    return api.provider().teams.updateName(teamsId, teamsName);
  },

  delete: (teamsId: any) => {
    return api.provider().teams.delete(teamsId);
  },

  createMembership: (
    teamsId: any,
    roles: any,
    url: any,
    email?: any,
    userId?: any,
    phone?: any,
    name?: any
  ) => {
    return api.provider().teams.createMembership(teamsId, roles, url, email);
  },

  createDocument: (databaseId: any, collectionId: any, data: any) => {
    return api
      .provider()
      .database.createDocument(databaseId, collectionId, "unique()", data);
  },

  getDocument: (databaseId: any, collectionId: any, documentId: any) => {
    return api
      .provider()
      .database.getDocument(databaseId, collectionId, documentId);
  },

  listDocuments: (databaseId: any, collectionId: any, queries?: any) => {
    return api
      .provider()
      .database.listDocuments(databaseId, collectionId, queries);
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
