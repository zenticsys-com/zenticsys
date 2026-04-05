"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { servicesFaqs } from "@/data/faqs";

const ServicesFAQ = () => {
  /**- State -**/
  const [expanded, setExpanded] = useState<number | false>(false);

  /**- Click Handler -**/
  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {servicesFaqs?.map((faq, index) => (
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          key={index}
          sx={{
            borderRadius: 0,
            boxShadow: "none",
            backgroundColor: "transparent",

            "&:first-of-type": {
              borderRadius: 0,
            },

            "&:last-of-type": {
              borderRadius: 0,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 600,
                padding: 0,
                margin: 0,
              }}
              component="h4"
            >
              {faq?.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"p"}>{faq?.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default ServicesFAQ;
