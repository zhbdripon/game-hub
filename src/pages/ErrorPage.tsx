import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Heading>Oops</Heading>

      <Text>
        {isRouteErrorResponse(error)
          ? `This page doesn't exist`
          : "An unexpected error occurred."}
      </Text>
    </>
  );
};

export default ErrorPage;
