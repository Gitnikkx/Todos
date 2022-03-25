import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Text } from "../../components/Text";
import { Box } from "../../components/Box/Box";
import { Flex } from "../../components/Flex/Flex";

export const FormFormik = () => {
  return (
    <>
      <Box width="fit-content" bg="#F2F8F4" p="2rem" border="2px solid #13427C">
        <Box mb="1rem" bg="#13427C" width="fit-content" p="10px" borderRadius="55px">
          <Text color="white" fontSize="2rem">
            Personal Information
          </Text>
        </Box>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            location: "",
            include_portfolio: false,
            include_social: true,
          }}
          onSubmit={(values) => console.log(values)}
          validate={(values) => {
            let error = {};
            if (values.firstname === "A") {
              error["firstname"] = "you cant use this";
              return error;
            }
          }}
        >
          {(values) => (
            <Form>
              {/* personaldetails form  */}
              <section>
                {/* name */}
                <Box bg="#C9CE64" mb="1rem" width="fit-content" p="10px" borderRadius="55px">
                  <label htmlFor="firstname">First Name &nbsp; </label>
                  <Field required type="text" id="firstname" name="firstname" />
                  {/* instead of input use field */}
                  <br />{" "}
                  <Text color="red" fontSize="1rem" pl="5rem">
                    {" "}
                    <ErrorMessage name="firstname" component="span" />{" "}
                  </Text>
                </Box>

                {/* surname */}
                <Box bg="#C9CE64" mb="1rem" width="fit-content" p="10px" borderRadius="55px">
                  <label htmlFor="lastname">Last Name &nbsp;</label>
                  <Field required type="text" id="lastname" name="lastname" />
                </Box>

                {/* email */}
                <Box bg="#C9CE64" mb="1rem" width="fit-content" p="10px" borderRadius="55px">
                  <label htmlFor="email">Email Address &nbsp;</label>
                  <Field type="email" id="email" name="email" />
                </Box>

                {/* contact */}
                <Box bg="#C9CE64" mb="1rem" width="fit-content" p="10px" borderRadius="55px">
                  <label htmlFor="phone">Phone Number &nbsp;</label>
                  <Field type="text" id="phone" name="phone" />
                </Box>

                {/* location */}
                <Box bg="#C9CE64" mb="1rem" width="fit-content" p="10px" borderRadius="55px">
                  <label htmlFor="location">Location &nbsp;</label>
                  <Field type="text" id="location" name="location" />
                </Box>
              </section>

              {/* <section>
              <h4>Work Information</h4>
              <div>
                <label htmlFor="current_employer">Current Employer</label>
                <Field type="text" id="current_employer" name="current_employer" />
              </div>
              <div>
                <label htmlFor="current_role">Current Role</label>
                <Field type="text" id="current_role" name="current_role" />
              </div>
              <div>
                <label htmlFor="role_description">Role Description</label>
                <Field type="text" id="role_description" name="role_description" />
              </div>
              <div>
                <label htmlFor="experience">Total Years of Experience</label>
                <Field type="text" id="experience" name="experience" />
              </div>
              <div>
                <label htmlFor="skills">Skills</label>
                <Field type="text" id="skills" name="skills" />
              </div>
            </section>  */}

              {/* socail media not working */}
              <section>
                <h4>Social Medial Links</h4>
                <Box m="10px" bg="#D0E3CC">
                  <label>
                    <Field
                      className="filled-in"
                      type="checkbox"
                      name="include_portfolio"
                      id="include_portfolio"
                    />
                    <span>Include Portfolio Links?</span>
                  </label>
                </Box>

                <Box m="10px" bg="#D0E3CC">
                  <label>
                    <Field
                      className="filled-in"
                      type="checkbox"
                      name="include_social"
                      id="include_social"
                    />
                    <span>Include Social Media Links?</span>
                  </label>
                </Box>

                {values["include_portfolio"] && (
                  <div>
                    <label htmlFor="portfolio_links">Portfolio links</label>
                    <Field type="text" id="portfolio_links" name="portfolio_links" />
                  </div>
                )}

                {values["include_social"] && (
                  <div>
                    <label htmlFor="social_media_links">Social Media Links</label>
                    <Field type="text" id="social_media_links" name="social_media_links" />
                  </div>
                )}
              </section>

              {/* <section>
              <h4>Uploads</h4>
              <br />
              <div>
                <label htmlFor="resume">Select Resume</label>
                <br />
                <input type="file" id="resume" />
              </div>
              <br />
              <br />
              <div>
                <label htmlFor="cover_letter">Select Cover Letter</label>
                <br />
                <input type="file" id="cover_letter" />
              </div>
            </section> */}

              <Box bg="#13427C" mb="1rem" width="fit-content" p="1px" borderRadius="55px">
                <button type="submit" className="btn">
                  <Text color="white"> Submit Form</Text>
                </button>
              </Box>




            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
