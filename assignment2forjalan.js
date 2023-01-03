const SERVICECODE = "service_code";
const SERVICE = "service";
const HATCHBACK = "hatchback";
const SEDAN = "sedan";
const SUV = "suv";
const BS01 = "BS01_Basic_Servicing";
const EF01 = "EF01_Engine_Fixing";
const CF01 = "CF01_Clutch_Fixing";
const BF01 = "BF01_Break_Fixing";
const GF01 = "GF01_Gear_Fixing";

const Global = [
  {
    [BS01]: {
      [SEDAN]: 4000,
      [HATCHBACK]: 2000,
      [SUV]: 5000,
    },
  },
  {
    [EF01]: {
      [SEDAN]: 8000,
      [HATCHBACK]: 5000,
      [SUV]: 10000,
    },
  },
  {
    [CF01]: {
      [SEDAN]: 4000,
      [HATCHBACK]: 2000,
      [SUV]: 6000,
    },
  },
  {
    [BF01]: {
      [SEDAN]: 1500,
      [HATCHBACK]: 1000,
      [SUV]: 2500,
    },
  },
  {
    [GF01]: {
      [SEDAN]: 6000,
      [HATCHBACK]: 3000,
      [SUV]: 8000,
    },
  },
];

class CarService {
  constructor(carType, codes) {
    this.carType = carType;
    this.codes = codes;
    this.total = [];
  }
  Charges() {
    console.log(
      "Type of Car - ",
      this.carType,
      "\n",
      "Service Codes - ",
      this.codes.toString(),
      "\n"
    );
    this.codes.map((code) => {
      Global.map((el) => {
        el[code] !== undefined &&
          this.total.push(el[code][this.carType]) &&
          console.log(`Charges for ${code} - `, el[code][this.carType]);
      });
    });
    const total = this.total.reduce((a, b) => a + b, 0);
    console.log("Total Bill - ", total);

    if (total > 10000) {
      console.log(
        "the total service bill is more than ₹ 10000, a complimentary cleaning is suggested "
      );
    }
  }
}

// Second argument (car codes) must be an array :)
const car = new CarService(SUV, [GF01, BS01, EF01]);
car.Charges();
