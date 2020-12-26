import {
  Button,
  Flex,
  Icon,
  Stack,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

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
          <Icon viewBox="0 0 46 32" boxSize="3em">
            <path
              d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
              fill="currentColor"
            />
          </Icon>
          <Link>Sites</Link>
          <Link>Feedback</Link>
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
        <Flex alignItems="stretch" flexDirection="column" maxWidth="800px" p={8} w="100%">
          <Breadcrumb color="gray.700" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink>Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
            <Heading mb={4}>Sites</Heading>
            <AddSiteModal>+ Add Site</AddSiteModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DashboardShell;
