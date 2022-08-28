export default (context, resources) => ({
  async setTag(){
    try {
      const response = await context.$axios.post(resources);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async setParams(params){
    try {
      const response = await context.$axios.post(resources,null,{
        params
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async setPayload(payload){
    try {
      const response = await context.$axios.post(resources,payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async setParamsBody(payload,params){
    try {
      const response = await context.$axios.post(resources,payload,{
        params
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async setConfig(config){
    try {
      const response = await context.$axios.post(resources,null,config);
      return response;
    } catch (error) {
      console.log(error);
    }
  },


})
