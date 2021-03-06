export function json() {
  return {
    subscribe: async (msg) => {
      if(msg) {
        const content = msg.toString();
        return JSON.parse(content);
      }
    },
    publish: async (msg) => {
      const json = JSON.stringify(msg);
      return new Buffer(json);
    }
  };
}
