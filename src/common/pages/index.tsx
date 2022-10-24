import { FC, Fragment, createElement as h, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageProps } from "@not-govuk/app-composer";
import config from "../config";
import { ExpandableBanner, StatusMessage } from "@hods/components";

/**
 *

 *
 *
 *
 */
const siteTitle = config.title;

export const title = "Home";
const description = "The Homepage";

const Page: FC<PageProps> = (props) => {
  const [isGranted, setGranted] = useState(false);

  const statusActions = [
    {
      text: "Grant",
      onClick: (evt) => {
        setGranted(true);
        evt.preventDefault();
      },
    },
    {
      text: "Revoke",
      onClick: function (evt) {
        setGranted(false);
        evt.preventDefault();
      },
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {title} - {siteTitle}
        </title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Helmet>
      <h1>{title}</h1>
      <p>This is the home page.</p>
      <StatusMessage
        status="Pending Review"
        classModifiers="licence-status"
        actions={statusActions}
      >
        - due for review 31 May 2023
      </StatusMessage>

      <ExpandableBanner
        status={isGranted ? "Renewed" : "Expired/Declined"}
        classModifiers={isGranted ? "positive" : "negative"}
      >
        This licence is {isGranted ? "" : "not"} active. The licence holder or
        applicant is {isGranted ? "" : "not"} authorised to carry out the
        programme of work as stated in this licence/application.
      </ExpandableBanner>
    </Fragment>
  );
};

export default Page;
