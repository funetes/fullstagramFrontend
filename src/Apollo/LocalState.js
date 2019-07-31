export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false
};

export const resolvers = {
  Mutation : {
    userLogIn : (_,{token},{cache}) => {
      localStorage.setItem("token",token);
      // 문서 찾아볼것 cache
      cache.writeData({
        data: {
          isLoggedIn : true
        }
      });
      return null;
    },
    userLogOut : (_,__,{cache}) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    }
    
  }
};

