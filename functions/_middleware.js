const cookieName = "ab-test-cookie"
const newHomepagePathName = "/test"

const abTest = async ({request, next, env}) => {
  /*
  Todo: 
  1. Assign cookies based on randomly genrated percentage, then serve
  */

  const url = new URL(request.url)
  if (url.pathname === "/") {
    // if cookie ab-test-cookie=new then change the request to go to /test
    // if no cookie set, pass x% of traffic and set a cookie value to "current" or "new"

    let cookie = request.headers.get("cookie")
    // is cookie set?
    if (cookie && cookie.includes(`${cookieName}=new`)) {
      // Change the request to go to /test (as set in the newHomepagePathName variable)
      url.pathname = newHomepagePathName
      return env.ASSETS.fetch(url)
    }
  }
}

export const onRequest = [abTest]
