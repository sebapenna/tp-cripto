import { Request, Router } from "express";
import * as core from "express-serve-static-core";
import axios from "axios";

export const oauthRedirectRouter = Router()

interface OAuthRedirectRequestQuery extends core.Query {
  code: string;
}

interface OAuthRedirectRequest extends Request {
  query: OAuthRedirectRequestQuery
}

oauthRedirectRouter.get("/", (req: OAuthRedirectRequest, res) => {
  /* Extract the code from the authorize response */
  const requestTokenCode = req.query.code;

  /**
   * Make POST request to Github authentication API to request the access token
   * */
  axios({
    method: "post",
    url: `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${requestTokenCode}`,
    headers: {
      accept: 'application/json'
    }
  }).then((response) => {
    /* Get the access token from the response body */
    const accessToken = response.data.access_token
    /* Redirect user to info page */
    res.redirect(`/welcome.html?access_token=${accessToken}`)
  })

})