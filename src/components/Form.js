import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import bgImage from "../img/bg.jpg";
import audiLogo from "../img/logo.svg";
import SignUpForm from "./SignUpForm";

const styles = {
  root: {
    background: `url('${bgImage}') no-repeat left center fixed`,
    backgroundSize: "cover",
    height: "100vh",
    padding: "5rem"
  },
  heading: {
    fontSize: "3.75rem",
    textTransform: "uppercase",
    fontWeight: 500,
    color: "white"
  },
  sentence: {
    fontSize: "1.25rem",
    color: "white",
    "& span": {
      color: "red"
    }
  }
};

// @media (max-width: 700px) {
// body {
//  background-position: 25%;
// }
// }
// `;

// const FormBG = styled.body`
//   background-color: rgba(0, 0, 0, 0.25);
//   padding: 3rem;
//   border-radius: 5px;
//   max-width: 25rem;
//   max-height: 25rem;
// `;

// const Heading = styled.h1`
//   font-size: 2.5rem;
//   text-transform: uppercase;
//   font-weight: 500;
// `;

// const SubHeading = styled.p`
//   font-size: 20px;
// `;
const Form = props => {
  const { classes } = props;

  return (
    <main className={classes.root}>
      <img style={{ width: "200px" }} src={audiLogo} alt="Audi" />
      <Typography className={classes.heading}>0-60 in</Typography>
      <Typography className={classes.heading}>3 seconds.</Typography>
      <Typography className={classes.sentence}>
        Sign up to test drive the all new <span>R8</span>.
      </Typography>
      <SignUpForm />
    </main>
  );
};

// const Form = props => {
//   console.log(props);
//   return <body>hi</body>;
// return (
//   <Fragment>
//     <FormBG>
//       <img style={{ width: "200px" }} src={audiLogo} alt="Audi" />
//       <Heading>
//         0-60 in
//         <br />3 seconds.
//       </Heading>
//       <SubHeading>
//         Sign up to test drive the all new{" "}
//         <span style={{ color: "#BB0A30", fontWeight: "bold" }}>R8</span>.
//       </SubHeading>
//       <SignUpForm />
//     </FormBG>
//   </Fragment>
// );
// };
Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
