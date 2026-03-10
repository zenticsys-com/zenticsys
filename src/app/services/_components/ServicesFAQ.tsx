import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ServicesFAQ = () => {
  /**_Data_**/
  const servicesFaqs = [
    {
      question: "Do you build software from scratch?",
      answer:
        "Yes. We design and engineer systems from the ground up, starting with architecture planning, database design, and structured development to ensure long-term maintainability.",
    },
    {
      question: "Can you integrate third-party services?",
      answer:
        "Yes. We integrate payment gateways, CRMs, ERPs, identity providers, cloud services, analytics tools, and other enterprise systems.",
    },
    {
      question: "Do you provide code ownership to clients?",
      answer:
        "Yes. Upon project completion and agreement terms, clients receive full access and ownership rights.",
    },
    {
      question: "Do you provide system architecture planning?",
      answer:
        "Yes. Architecture planning is a core part of our process. We design backend systems, API layers, database schemas, and infrastructure models before development begins..",
    },

    {
      question: "What types of custom software do you develop?",
      answer:
        "We develop enterprise software systems, SaaS platforms, web applications, internal business tools, automation systems, dashboards, and industry-specific digital platforms tailored to operational requirements.",
    },

    {
      question: "Can you redesign and improve existing software?",
      answer:
        "Yes. We audit, refactor, and modernize outdated systems to improve performance, architecture, and user experience. This includes backend optimization, UI redesign, database tuning, and cloud migration implemented without disrupting business operations.",
    },

    {
      question: "Do you provide system performance benchmarking?",
      answer:
        "Yes. We measure response times, database efficiency, and infrastructure load capacity to ensure optimal performance.",
    },
  ];
  return (
    <div>
      {servicesFaqs?.map((faq, index) => (
        <Accordion
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
