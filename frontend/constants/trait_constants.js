//Note: age will be handled with sliders!
//For height, we'll use sliders, but we'll store a constants array that
//we'll interate through as inches, and use a function to convert that
//to feet/inches dynamically as we map out the array into react tabs

module.exports = {

  responses: ["Pick your opinion","Agree", "Disagree"],

  location: [
    { value: "San Francisco", label: "San Francisco"},
    { value: "Los Angeles", label: "Los Angeles"}
  ],

  gender: [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Male-to-female transgender", label: "Male-to-female transgender"},
    { value: "Female-to-male transgender", label: "Female-to-male transgender"},
    { value: "Non-conforming/other", label: "Non-conforming/other"}
  ],

  orientation: [
    { value: "Straight", label: "Straight"},
    { value: "Gay/Lesbian", label: "Gay/Lesbian"},
    { value: "Bisexual", label: "Bisexual"},
    { value: "Other", label: "Other"}
  ],

  height: [
    { value: 48, label: "4\'0\" or less"},
    { value: 49, label: "4\'1\""},
    { value: 50, label: "4\'2\""},
    { value: 51, label: "4\'3\""},
    { value: 52, label: "4\'4\""},
    { value: 53, label: "4\'5\""},
    { value: 54, label: "4\'6\""},
    { value: 55, label: "4\'7\""},
    { value: 56, label: "4\'8\""},
    { value: 57, label: "4\'9\""},
    { value: 58, label: "4\'10\""},
    { value: 59, label: "4\'11\""},
    { value: 60, label: "5\'0\""},
    { value: 61, label: "5\'1\""},
    { value: 62, label: "5\'2\""},
    { value: 63, label: "5\'3\""},
    { value: 65, label: "5\'4\""},
    { value: 65, label: "5\'5\""},
    { value: 66, label: "5\'6\""},
    { value: 67, label: "5\'7\""},
    { value: 68, label: "5\'8\""},
    { value: 69, label: "5\'9\""},
    { value: 70, label: "5\'10\""},
    { value: 71, label: "5\'11\""},
    { value: 72, label: "6\'0\""},
    { value: 73, label: "6\'1\""},
    { value: 75, label: "6\'2\""},
    { value: 75, label: "6\'3\""},
    { value: 76, label: "6\'4\""},
    { value: 77, label: "6\'5\""},
    { value: 78, label: "6\'6\""},
    { value: 79, label: "6\'7\""},
    { value: 80, label: "6\'8\""},
    { value: 81, label: "6\'9\""},
    { value: 82, label: "6\'10\""},
    { value: 83, label: "6\'11\""},
    { value: 86, label: "7\'0\" or more"}
  ]
};
