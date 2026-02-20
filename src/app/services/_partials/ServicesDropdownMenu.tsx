// "use client";

// import Link from "next/link";
// import { Box, Button, Menu as MuiMenu, Typography } from "@mui/material";

// type Props = {
//   open: boolean;
//   onClose: () => void;
// };

// const servicesMenu = [
//   {
//     title: "Web Design Services",
//     description: "Crafting Intuitive Experiences",
//     items: [
//       { name: "Web Design Services", href: "/services/web-design-services" },
//       { name: "UX Audit", href: "/services/ux-audit" },
//       { name: "UX Research", href: "/services/ux-research" },
//     ],
//   },
//   {
//     title: "Brand Design",
//     description: "Crafting Timeless Visuals",
//     items: [
//       { name: "Brand Identity", href: "/services/brand-identity" },
//       { name: "Corporate Identity", href: "/services/corporate" },
//     ],
//   },
//   {
//     title: "Brand Design",
//     description: "Crafting Timeless Visuals",
//     items: [
//       { name: "Brand Identity", href: "/services/brand-identity" },
//       { name: "Corporate Identity", href: "/services/corporate" },
//     ],
//   },
//   {
//     title: "Brand Design",
//     description: "Crafting Timeless Visuals",
//     items: [
//       { name: "Brand Identity", href: "/services/brand-identity" },
//       { name: "Corporate Identity", href: "/services/corporate" },
//     ],
//   },
// ];

// const ServicesDropdownMenu = ({ open, onClose }: Props) => {
//   return (
//     <MuiMenu
//       open={open}
//       onClose={onClose}
//       anchorReference="anchorPosition"
//       anchorPosition={{
//         top: 100,
//         left: window.innerWidth / 2,
//       }}
//       transformOrigin={{
//         horizontal: "center",
//         vertical: "top",
//       }}
//       MenuListProps={{
//         onMouseLeave: onClose,
//       }}
//       PaperProps={{
//         sx: {
//           width: "75vw",
//           transform: "translateX(-50%)",
//           borderRadius: 0,
//           cursor: "pointer",
//           p: 4,
//         },
//       }}
//     >
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "repeat(1, 1fr)",
//             sm: "repeat(2, 1fr)",
//             md: "repeat(4, 1fr)",
//           },
//           gap: 4,
//         }}
//       >
//         {servicesMenu.map((category) => (
//           <Box key={category.title}>
//             <Typography fontWeight={600}>{category.title} →</Typography>

//             <Typography variant="body2" color="text.secondary" mb={2}>
//               {category.description}
//             </Typography>

//             {category.items.map((item) => (
//               <Button
//                 key={item.href}
//                 component={Link}
//                 href={item.href}
//                 sx={{
//                   display: "block",
//                   textAlign: "left",
//                   textTransform: "none",
//                   borderRadius: 0,
//                   mb: 1,
//                 }}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         ))}
//       </Box>
//     </MuiMenu>
//   );
// };

// export default ServicesDropdownMenu;
