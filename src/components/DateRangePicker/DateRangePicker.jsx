import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { getTransactions } from "../../api";

function DateRangePickerFree({setSearchResults}) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // const formatDate = (date) => {
  //   if (!date) return "";
  //   const year = date.year();
  //   const month = String(date.month() + 1).padStart(2, "0"); 
  //   const day = String(date.date()).padStart(2, "0");
  //   return `${year}-${month}-${day}`;
  // };
  useEffect(() => {
    const fetchTransactions = async () => {
        try {
            const res = await getTransactions({startDate:startDate,endDate:endDate});
            setSearchResults(res?.data?.data);
        } catch (error) {
                console.log(error);
        }
    }
    if(endDate && startDate){
        fetchTransactions();
    }
  },[startDate,endDate,setSearchResults]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", gap: "10px", alignItems: "center",color:"white" }}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          sx={{
            backgroundColor:"#282C35",
            padding:'0.5rem',borderRadius:'10px' 
            }}
          renderInput={(params) => (
            <TextField
              {...params}
            />
          )}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          sx={{
            backgroundColor:"#282C35",
            padding:'0.5rem',borderRadius:'10px' 
            }}
          renderInput={(params) => (
            <TextField
              {...params}
            />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default DateRangePickerFree;

