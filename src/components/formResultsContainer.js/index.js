import { connect } from "react-redux";

const FormResultsContainer = (props) => {
  const { formDetailsObject } = props;
  console.log(formDetailsObject);
  return <p>hello</p>;
};

const mapStateToProps = (state) => ({
  formDetailsObject: state.form.FormContainer,
});

export default connect(mapStateToProps)(FormResultsContainer);
