export const filterObjectValue = (params: Record<string, any>) => {
  if (typeof params === "object") {
    const isEmptyObj = Object.values(params).filter(
      (entry: string) => entry === ""
    );
    const disabled: boolean = isEmptyObj.length !== 0;
    return disabled;
  }
};
