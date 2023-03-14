const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ******* presenter-details validation ********************************
router.get('/v2/presenter-id', function (req, res) {
  // Set URl
  res.render('v2/presenter-id', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/presenter-id', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (req.session.data['presenter-id'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your Presenter ID',
      href: '#presenter-id'
    })
  
    // Re-show page with error value as true so errors will show
    res.render('v2/presenter-id', {
      errorID: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/presenter-auth-code')
  }
})


// ******* presenter-auth-code validation ********************************
router.get('/v2/presenter-auth-code', function (req, res) {
  // Set URl
  res.render('v2/presenter-auth-code', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/presenter-auth-code', function (req, res) {
  // Create empty array
  var errors = []

  // Check if user has filled out a value
  if (req.session.data['auth-code'] === '') {
    // No value so add error to array
    errors.push({
      text: 'Enter your Presenter authentication code',
      href: '#auth-code'
    })
  
    // Re-show page with error value as true so errors will show
    res.render('v2/presenter-auth-code', {
      errorSubmission: true,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/account-submission')
  }
})


// ******* sign-in validation ********************************
router.get('/v2/sign-in', function (req, res) {
  // Set URl
  res.render('v2/sign-in', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/sign-in', function (req, res) {
  // Create empty array and set error variables to false
  var errors = []
  var emailHasError = false
  var passwordHasError = false

  // Check if user has filled out a email
  if (req.session.data['emailAddress'] === '') {
    // No value so add error to array
    emailHasError = true
    errors.push({
      text: 'Enter your email address',
      href: '#emailAddress'
    })
  }

  // Check if user has filled out a password
  if (req.session.data['password'] === '') {
    // No value so add error to array
    passwordHasError = true
    errors.push({
      text: 'Enter your password',
      href: '#password'
    })
  }

  // Check if eother filed not filled out
  if (emailHasError || passwordHasError) {
    // Re-show page with error value as true so errors will show
    res.render('v2/sign-in', {
      errorEmail: emailHasError,
      errorPassword: passwordHasError,
      errorList: errors
    })
  } else {
    // User inputted value so move to next page
    res.redirect('/v2/presenter-id')
  }
})


// ******* account-submission validation ********************************
router.get('/v2/account-submission', function (req, res) {
  // Set URl
  res.render('v2/account-submission', {
    currentUrl: req.originalUrl
  })
})

router.post('/v2/account-submission', function (req, res) {
  res.redirect('/v2/success')
})


module.exports=router;

