const { Router } = require('express')
const brypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const router = Router()
const User = require('../models/User')

router.post('/register',
  [
    check('email', 'Invalid email').isEmail(),
    check('password', 'Invalid password, minimum 6 characters')
      .isLength({ min: 6 })
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid registration data'
      })
    }

    const { email, password } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({ email, password: hashedPassword })

    await user.save()

    res.status(201).json({ message: 'User created' })

  } catch (error) {
    res.status(500).json({message: 'Something went wrong, try call administrator'})
  }
})

router.post('/login', async (req, res) => {

})

module.exports = router