export default function (context) {
  const { $axios, app } = context;
  $axios.onError(async (error) => {
    if (error && error.response && error.response.status && error.response.status === 401) {
      await app.$auth.logout();
    }
  });
}
