interface OpenApi {
  routes: {
    [uri: string]: {
      get?: {
        summary?: string,
        description?: string,
        operationId?: string,
      },
      post?: {
        summary?: string,
        description?: string,
        operationId?: string,
      },
      put?: {
        summary?: string,
        description?: string,
        operationId?: string,
      },
      delete?: {
        summary?: string,
        description?: string,
        operationId?: string,
      },
      patch?: {
        summary?: string,
        description?: string,
        operationId?: string,
      },
      head?: {
        summary?: string,
        description?: string,
        operationId?: string,
      },
      options?: {
        summary?: string,
        description?: string,
        operationId?: string,
      },
      trace?: {
        summary?: string,
        description?: string,
        operationId?: string,
      },
    },
  },
}
export default OpenApi;
