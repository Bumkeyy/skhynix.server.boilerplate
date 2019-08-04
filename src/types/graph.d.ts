export const typeDefs = ["type Query {\n  getMachine(id: ID!): Machine\n  getMachines: [Machine]\n}\n\ntype Subscription {\n  MachineSubscription: [Machine]\n}\n\ntype Machine {\n  id: ID!\n  name: String!\n  type: String!\n  state: String!\n}\n"];
/* tslint:disable */

export interface Query {
  getMachine: Machine | null;
  getMachines: Array<Machine> | null;
}

export interface GetMachineQueryArgs {
  id: string;
}

export interface Machine {
  id: string;
  name: string;
  type: string;
  state: string;
}

export interface Subscription {
  MachineSubscription: Array<Machine> | null;
}
