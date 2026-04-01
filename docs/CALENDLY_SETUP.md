# How to set up Calendly for Schedule Discovery Call

Use this guide to create a Calendly event and get the URL for `VITE_CALENDLY_DISCOVERY_URL`. After form submit, that URL is embedded so users can pick a time.

---

## 1. Sign up or log in

- Go to [calendly.com](https://calendly.com).
- Click **Get started** / **Sign up for free**, or **Log In** if you already have an account.

---

## 2. Connect your calendars

- Calendly will prompt you to connect your calendars (Google, Outlook, iCloud, etc.).
- Connect at least one so Calendly can use your **real-time availability** and avoid double bookings.
- You can connect up to six calendars.

---

## 3. Set your availability

- Open **Availability** in your Calendly dashboard.
- Set your **working hours**, **buffer times** (before/after meetings), and **scheduling rules** (e.g. minimum notice, max meetings per day).

---

## 4. Create a Discovery Call event type

- In the dashboard, choose **Create new Event Type** (or similar).
- Pick **One-on-One** for a discovery call.

**Configure the event:**

| Setting | Suggestion |
|--------|------------|
| **Name** | e.g. `Discovery Call` or `Discovery Call with GitaVox` |
| **Location** | Zoom, Google Meet, Microsoft Teams, or Phone. Calendly can create meeting links automatically. |
| **Duration** | e.g. 30 min or 60 min |
| **Description** | What the call is about, what to expect |
| **Invitee questions** | Calendly includes name and email by default. Add custom questions if you need them. |

Save the event type.

---

## 5. Get your event URL

- After saving, Calendly shows a **scheduling link** for that event.
- It looks like: `https://calendly.com/your-username/your-event-name`

**Use this URL as `VITE_CALENDLY_DISCOVERY_URL`** in `.env.local`, then restart your dev server.

---

## 6. Test the link

- Open the link in an **incognito/private** window.
- Confirm availability, location, and questions look correct.
- Submit the form on your site and check that the Calendly embed loads and prefill (name, email) works.

---

## Quick reference

- **Calendly:** [calendly.com](https://calendly.com)
- **Env var:** `VITE_CALENDLY_DISCOVERY_URL=https://calendly.com/your-username/your-event-name`
- **Restart** the app after changing `.env.local`.
