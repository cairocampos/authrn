interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'dsadasdasdasdjaksdjkasdhksahdjhasjdhajshdjashjdhajshdajsh',
        user: {
          name: 'Cairo',
          email: 'cairo@gmail.com',
        },
      });
    }, 2000);
  });
}
