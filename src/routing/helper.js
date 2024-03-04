
export const convertToRoutes = ({
  data = [],
}) => {
  let items = [];
  if (Array.isArray(data)) {
    items = data;
  } else {
    items = [...data.mainMenuItems];
  }

  const routes = [];
  return () => {
    const itemMapper = (item) => {
      const tempItem = { ...item };
      if (item.hideInRoute) return itemMapper({});

      if (item.subs) tempItem.exact = true;

    }
    items.map(itemMapper);
    return routes;
  };
};


export const getRoutes = ({ data }) =>
  convertToRoutes({
    data
  })();