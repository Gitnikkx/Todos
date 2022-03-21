import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import {Box} from "../Box/Box";

export const Text = forwardRef(({ children, id, classes, values, ...props }, textRef) => (
  <Box {...props} ref={textRef} className={classes}>
    {children || null}
  </Box>
));

Text.defaultProps = {
  fontSize: "1.6rem",
  id: null,
};

Text.propTypes = {
  id: PropTypes.string,
  fontSize: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
};
