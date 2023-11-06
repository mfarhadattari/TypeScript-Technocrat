{
  // ---------------> Interface Generic ------------------->
  interface Developer<TSmartWatch, TBike = null> {
    name: string;
    age: number;
    isMarried: boolean;
    gender: "Male" | "Female";
    computer: {
      brand: string;
      model: string;
      info: string;
      releaseYear: number;
    };
    smartWatch: TSmartWatch;
    bike?: TBike;
  }

  interface EmilabWatch {
    brand: "Emilab";
    model: string;
    display: string;
  }

  interface AppleWatch {
    brand: "Apple";
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Bike {
    brand: string;
    model: string;
  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Mohammad Farhad",
    age: 19,
    isMarried: false,
    gender: "Male",
    computer: {
      brand: "ASUS",
      model: "ASUS62h",
      info: "8GB RAM & 256SSD",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  const reachDeveloper: Developer<AppleWatch, Bike> = {
    name: "Mohammad Shakib",
    age: 25,
    isMarried: true,
    gender: "Male",
    computer: {
      brand: "Macbook",
      model: "Macbook PRO",
      info: "8GB RAM & 256SSD",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "apple22",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "YAMAHA",
      model: "RDCJ20",
    },
  };
}
