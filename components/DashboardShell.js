import {
  Avatar,
  Button,
  Flex,
  Stack,
  Link
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import NextLink from 'next/link';
import FastFeedbackIcon from './icons/FastFeedbackIcon';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Flex flexDirection="column">
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Stack
          spacing={4}
          isInline
          alignItems="center"
          justifyContent="space-between"
        >
          <FastFeedbackIcon boxSize="3em" />
          <NextLink href="/dashboard" passHref>
            <Link mr={4}>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
        </Stack>
        <Stack
          spacing={4}
          isInline
          alignItems="center"
          justifyContent="space-between"
        >
          <Button fontWeight="normal" variant="ghost" mr={2} onClick={() => signout()}>Log Out</Button>
          <Avatar size="sm" src={user?.photoUrl} />
        </Stack>
      </Flex>
      <Flex alignItems="center" backgroundColor="gray.100" flexDirection="column">
        <Flex flexDirection="column" maxWidth="1250px" p={8} w="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DashboardShell;
