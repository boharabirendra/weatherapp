export interface IData {
  location: { name: string; localtime: string };
  current: {
    temp_c: string;
    temp_f: string;
    condition: { text: string; icon: string; code: string };
    wind_kph: string;
    wind_mph: string;
    cloud: string;
    humidity: string;
  };
}

export const initialData = {
  location: { name: "", localtime: "" },
  current: {
    temp_c: "",
    temp_f: "",
    condition: { text: "", icon: "", code: "" },
    wind_kph: "",
    wind_mph: "",
    cloud: "",
    humidity: "",
  },
};
