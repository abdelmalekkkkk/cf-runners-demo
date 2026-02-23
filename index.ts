const getToken = (id: number, name: string) => {
  return new Promise((resolve) => setTimeout(() => resolve(id + name), 500));
};

const doShit = () => {
  return {
    hana: "labas",
    token: getToken.bind(null, 2, "mamak"),
  };
};

const wow = doShit();
console.log(await wow.token());
