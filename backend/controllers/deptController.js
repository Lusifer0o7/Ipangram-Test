const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Dept = require("../models/deptModel");
const ApiFeatures = require("../utils/apifeatures");

exports.createDept = catchAsyncErrors(async (req, res, next) => {
    
    const { name } = req.body;

    const dept = await Dept.create({
      name
    });

    res.status(201).json({
      success: true,
      dept,
    });
});

exports.getAllDept = catchAsyncErrors(async (req, res, next) => {
    
    const resultPerPage = 8;
  const deptCount = await Dept.countDocuments();

  const apiFeature = new ApiFeatures(Dept.find(), req.query)
    .search()
    .filter();

  let dept = await apiFeature.query;

  let filteredDeptCount = dept.length;

  apiFeature.pagination(resultPerPage);

  dept = await apiFeature.query;

  res.status(200).json({
    success: true,
    dept,
    deptCount,
    resultPerPage,
    filteredDeptCount,
  });
});


exports.updateDept = catchAsyncErrors(async (req, res, next) => {
    
    let dept = await Dept.findById(req.params.id);

  if (!dept) {
    return next(new ErrorHander("Deptartment not found", 404));
  }

  
  dept = await dept.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    dept,
  });
});

exports.deleteDept = catchAsyncErrors(async (req, res, next) => {
    
    const dept = await Dept.findById(req.params.id);

  if (!dept) {
    return next(new ErrorHander("Department not found", 404));
  }


  await dept.deleteOne();

  res.status(200).json({
    success: true,
    message: "Department Delete Successfully",
  });
});

