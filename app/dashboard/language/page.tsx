import React from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-10 shadow-lg rounded-3xl bg-gray-50 flex flex-col items-center justify-center">
        <FormControl>
          <FormLabel
            id="radio-buttons-group-label"
            style={{ color: "black", fontSize: "1.75rem", fontWeight: "bold" }}
          >
            Select A Language
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue="English"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="English"
              control={<Radio />}
              label="English"
            />
            <FormControlLabel
              value="Français"
              control={<Radio />}
              label="Français"
            />
            <FormControlLabel
              value="Русский"
              control={<Radio />}
              label="Русский"
            />
            <FormControlLabel
              value="Español"
              control={<Radio />}
              label="Español"
            />
          </RadioGroup>
        </FormControl>
        <Link href="/">
          <button className="text-xl font-bold bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 text-white flex gap-4  hover:scale-110 transition-all">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
