"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { automotiveAccordionItemsFaqs } from "@/data/faqs";
import { useState } from "react";

const AutomotiveAccordionItems = () => {
  /**- State -**/
  const [expanded, setExpanded] = useState<number | false>(false);

  /**- Click Handler -**/
  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {automotiveAccordionItemsFaqs.map((faq, index) => (
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          key={index}
          sx={{
            borderRadius: 0,
            boxShadow: "none",
            backgroundColor: "white",
            paddingX: "12px",

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
                fontSize: "18px",
                fontWeight: 600,
                padding: 0,
                margin: 0,
              }}
              component="h3"
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="p">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default AutomotiveAccordionItems;
