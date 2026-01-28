import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ScheduleFAQ = () => {
  /**_Data_**/
  const faqs = [
    {
      question: "How long does a typical consultation take?",
      answer:
        "Initial consultations usually last 30-60 minutes, depending on project complexity.",
    },
    {
      question: "Is the consultation free?",
      answer:
        "Yes, we offer free initial consultations to understand your needs and explore how we can help.",
    },
    {
      question: "What happens after the consultation?",
      answer:
        "We'll provide a detailed proposal with timeline, costs, and next steps within 48 hours.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations.",
    },
    {
      question: "What information should I prepare for the consultation?",
      answer:
        "Come prepared with your project goals, timeline, budget range, and any existing documentation or requirements.",
    },
    {
      question: "Can we schedule follow-up meetings?",
      answer:
        "Yes, we're happy to schedule additional meetings as needed throughout the project planning and development process.",
    },
  ];
  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            borderRadius: 0,
            boxShadow: "none",
            backgroundColor: "#F9FAFB",

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
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
export default ScheduleFAQ;
