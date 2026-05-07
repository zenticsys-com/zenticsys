"use client";
import { customWebsiteDesignFaqs, homeFaqs } from "@/data/faqs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const HomeFAQ = () => {
  /**- State -**/
  const [expanded, setExpanded] = useState<number | false>(false);

  /**- Click Handler -**/
  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {customWebsiteDesignFaqs?.map((faq, index) => (
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          key={index}
          sx={{
            borderRadius: 0,
            boxShadow: "none",

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
              component="span"
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
export default HomeFAQ;
