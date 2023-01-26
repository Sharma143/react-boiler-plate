import React from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import TranslationMessage from "configs/translations/TranslationMessage";
import { Formik } from "formik";
import * as yup from "yup";

// Components
import Dropdown from "components/formComponents/Dropdown";
import CustomButton from "components/formComponents/CustomButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "30px",
  },
  btnCancel: {
    background: "#f44236",
    color: "#ffff",
    padding: "7px 20px",
    "&:hover": {
      background: "#f44236",
    },
  },
  btnSave: {
    background: "#4eaf4d",
    color: "#ffff",
    padding: "7px 20px",
    "&:hover": {
      background: "#4eaf4d",
    },
  },
  end: {
    textAlign: "end",
  },
}));

function createYupSchema(schema, config) {
  const { id, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  schema[id] = validator;
  return schema;
}

const CustomForm = ({ formFields, closeForm, onSubmit, buttonValue }) => {
  const classes = useStyles();

  const initialValues = {};
  formFields.forEach((item) => {
    initialValues[item.id] = item.value || "";
  });

  const yepSchema = formFields.reduce(createYupSchema, {});
  const validationSchema = yup.object().shape(yepSchema);

  const createFormFields = (props) => {
    return formFields.map((formField) => {
      if (formField.type === "text") {
        return (
          <>
            <Grid item xs={4}>
              <p>
                <TranslationMessage id={formField.label} />
              </p>
            </Grid>
            <Grid item xs={8}>
              <TextField
                name={formField.id}
                label={<TranslationMessage id={formField.label} />}
                value={props.values[formField.id]}
                onChange={props.handleChange}
                type={formField.fieldType ? formField.fieldType : "text"}
                error={
                  props.touched[formField.id] &&
                  Boolean(props.errors[formField.id])
                }
                helperText={
                  props.touched[formField.id] && props.errors[formField.id]
                }
                fullWidth
              />
            </Grid>
          </>
        );
      } else if (formField.type === "dropdown") {
        return (
          <>
            <Grid item xs={4}>
              <p>
                <TranslationMessage id={formField.label} />
              </p>
            </Grid>
            <Grid item xs={8}>
              <Dropdown
                name={formField.id}
                classValue={classes.formControl}
                label={<TranslationMessage id={formField.label} />}
                value={props.values[formField.id]}
                menuItemsArray={formField.dropdownValues}
                onChange={props.handleChange}
                error={
                  props.touched[formField.id] &&
                  Boolean(props.errors[formField.id])
                }
                placeholder={
                  props.touched[formField.id] && props.errors[formField.id]
                }
              />
            </Grid>
          </>
        );
      } else return true;
    });
  };

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Grid container spacing={3}>
              {createFormFields(props)}
              <Grid item xs={12}>
                <CustomButton
                  type="submit"
                  fullWidth
                  style={{
                    color: "white",
                    padding: "7px 20px",
                    background: "#3f51b5",
                  }}
                  buttonValue={buttonValue}
                />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
