import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomWebAccordionItems = () => {
  /**_Data_**/
  const faqs = [
    {
      question: "Custom UI Design ",
      answer:
        "You can contact us through our website or schedule a consultation call. After understanding your requirements, we prepare a detailed proposal outlining the project scope, timeline, and cost estimation, ensuring everything is clearly defined before we move forward.",
    },
    {
      question: "Custom Web Design",
      answer:
        "We provide custom software development, SaaS product development, website design and development, mobile app development, website redesign, UI/UX design, and enterprise software solutions",
    },
    {
      question: "Custom Website Redesign",
      answer:
        "Our process starts with understanding your business goals, defining clear requirements and planning, UI/UX design, system architecture setup, backend and frontend development, testing and QA, deployment, and ongoing optimization. We follow agile principles for transparency and flexibility",
    },
    {
      question: "Custom Landing Page Design",
      answer:
        "Yes. We offer post-launch support, performance optimization, security updates, and feature enhancements. After successful project delivery, we provide 6 months of complimentary support to ensure system stability and smooth operation. Following that period, we offer affordable maintenance plans for continued reliability and long-term performance.",
    },
    {
      question: "Custom eCommerce Design",
      answer:
        "Project timelines depend on complexity and scope. MVP projects typically take 6–10 weeks, while full-scale enterprise systems may require 12–20 weeks or more.",
    },
    {
      question: "Custom Product Design",
      answer:
        "We don’t rush projects or over promise. We take time to understand your business, define the right structure, and build software that actually works in day-to-day operations. Our focus is clarity, clean implementation, and systems that remain stable as your company grows. No unnecessary complexity, no shortcuts, just solid engineering.",
    },
    {
      question: "Custom SaaS Design",
      answer:
        "We don’t rush projects or over promise. We take time to understand your business, define the right structure, and build software that actually works in day-to-day operations. Our focus is clarity, clean implementation, and systems that remain stable as your company grows. No unnecessary complexity, no shortcuts, just solid engineering.",
    },
    {
      question: "Custom Dashboard Design",
      answer:
        "We don’t rush projects or over promise. We take time to understand your business, define the right structure, and build software that actually works in day-to-day operations. Our focus is clarity, clean implementation, and systems that remain stable as your company grows. No unnecessary complexity, no shortcuts, just solid engineering.",
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
export default CustomWebAccordionItems;
