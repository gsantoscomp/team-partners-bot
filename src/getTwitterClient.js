import { TwitterApi} from "twitter-api-v2";
import twitterConfig from "./config/twitter.js";

export default () => {
    const client = new TwitterApi(twitterConfig);

    return client.readWrite;
}