import { Button, Flex, Text, Link, Stack } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import Head from 'next/head';
import FastFeedbackIcon from '@/components/icons/FastFeedbackIcon';
import GoogleIcon from '@/components/icons/GoogleIcon';
import GithubIcon from '@/components/icons/GithubIcon';

const Home = () => {
  const { user, signinWithGitHub, signinWithGoogle } = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      maxW="400px"
      margin="0 auto"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
        <title>Fast Feedback</title>
      </Head>

      <FastFeedbackIcon boxSize="3em" />
      <Text mb={4}>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        {' is being built as part of '}
        <Link
          href="https://react2025.com"
          isExternal
          textDecoration="underline"
        >
          React 2025
        </Link>
        {`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
      </Text>
      {user ? (
        <Button as="a" size="sm" fontWeight="medium" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
          <Stack mt={4}>
            <Button
              leftIcon={<GithubIcon />}
              onClick={() => signinWithGitHub()}
              size="md"
            >
              Sign in with Github
            </Button>
            <Button
              leftIcon={<GoogleIcon />}
              onClick={() => signinWithGoogle()}
              size="md"
            >
              Sign In with Google
            </Button>
          </Stack>
        )}
    </Flex>
  );
};

export default Home;
