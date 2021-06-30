export const basePostsURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/posts`;
export const baseNotesURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/notes`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
  },
};
