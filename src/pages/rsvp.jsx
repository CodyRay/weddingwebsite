import React from 'react'

import { withStyles } from '@material-ui/core/es/styles'
import TextField from '@material-ui/core/es/TextField'
import FormControl from '@material-ui/core/es/FormControl'
import FormLabel from '@material-ui/core/es/FormLabel'
import RadioGroup from '@material-ui/core/es/RadioGroup'
import Radio from '@material-ui/core/es/Radio'
import FormControlLabel from '@material-ui/core/es/FormControlLabel'
import Button from '@material-ui/core/es/Button'
import { navigate } from 'gatsby'
import { Layout } from '../components/layout'
import { compose, withState } from 'recompose'
import './rsvp.module.scss'
import Recaptcha from 'react-google-recaptcha'
import fetch from 'unfetch'

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

if (!RECAPTCHA_KEY) {
  throw new Error('Looks like the recaptcha key is missing')
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const styles = theme => ({
  formControl: {
    marginTop: `${theme.spacing.unit * 3}px`,
  },
  group: {
    marginLeft: `${theme.spacing.unit}px`,
    marginTop: `${theme.spacing.unit}px`,
  },
  button: {
    marginTop: `${theme.spacing.unit * 3}px`,
  },
})

const enhance = compose(
  withState('name', 'setName', ''),
  withState('contact', 'setContact', ''),
  withState('attend', 'setAttend', ''),
  withState('guest', 'setGuest', ''),
  withState('notes', 'setNotes', ''),
  withState('recaptcha', 'setRecaptcha', ''),
  withStyles(styles)
)

const Rsvp = enhance(
  ({
    classes,
    name,
    contact,
    attend,
    guest,
    notes,
    recaptcha,
    setName,
    setContact,
    setAttend,
    setGuest,
    setNotes,
    setRecaptcha,
  }) => (
    <Layout>
      <form
        name="rsvp"
        method="POST"
        action="/thanks"
        data-netlify="true"
        data-netlify-recaptcha="true"
        styleName="form"
        onSubmit={event => {
          console.log({
            name,
            contact,
            attend,
            guest,
            notes,
            recaptcha,
          })
          event.preventDefault()
          const form = event.target
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': form.getAttribute('name'),
              name,
              contact,
              attend,
              guest,
              notes,
              'g-recaptcha-response': recaptcha,
            }),
          })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(`Something went wrong: ${error}`))
        }}
      >
        <TextField
          name="name"
          type="text"
          id="name"
          label="Your Name"
          margin="dense"
          fullWidth
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          required
        />
        <FormControl
          component="fieldset"
          className={classes.formControl}
          margin="dense"
          fullWidth
        >
          <FormLabel component="legend" required>
            Will you attend?
          </FormLabel>
          <RadioGroup
            aria-label="Will you attend?"
            name="attend"
            className={classes.group}
            value={attend}
            onChange={({ target: { value } }) => setAttend(value)}
          >
            <FormControlLabel
              value="yes"
              control={<Radio required />}
              label="Yes, accept with pleasure"
            />
            <FormControlLabel
              value="no"
              control={<Radio required />}
              label="No, regretfully decline"
            />
          </RadioGroup>
        </FormControl>

        {attend !== 'no' && (
          <>
            <TextField
              name="guest"
              type="text"
              id="guest"
              label="Guest Name(s)"
              helperText="If bringing a guest"
              margin="dense"
              fullWidth
              value={guest}
              onChange={({ target: { value } }) => setGuest(value)}
            />
            <TextField
              name="contact"
              type={/^[-+0-9 ()]+$/.test(contact) ? 'tel' : 'email'}
              id="contact"
              label="Your Email or Phone"
              helperText="In case we need to contact you"
              margin="dense"
              fullWidth
              value={contact}
              onChange={({ target: { value } }) => setContact(value)}
              required
            />
          </>
        )}
        <TextField
          name="notes"
          type="text"
          id="notes"
          label="Other Notes"
          helperText="Dietary restrictions, comments, questions"
          multiline
          rowsMax="4"
          margin="dense"
          fullWidth
          value={notes}
          onChange={({ target: { value } }) => setNotes(value)}
        />

        <Recaptcha
          size="compact"
          className={classes.button}
          sitekey={RECAPTCHA_KEY}
          onChange={setRecaptcha}
        />

        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
          disabled={!recaptcha}
        >
          Submit
        </Button>
      </form>
    </Layout>
  )
)

export default Rsvp
