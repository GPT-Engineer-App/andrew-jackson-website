import React from "react";
import { Box, Heading, Text, Image, Stack, Container, SimpleGrid, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <SimpleGrid columns={[1, 1, 2]} spacing={8} alignItems="center">
            <Box>
              <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG9mJTIwYSUyMG1hbnxlbnwwfHx8fDE3MTE5OTU4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Andrew Jackson" />
            </Box>
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Andrew Jackson
              </Heading>
              <Text fontSize="xl" mb={6}>
                Software Engineer | Web Developer | Tech Enthusiast
              </Text>
              <Stack direction="row" spacing={4}>
                <Link href="https://linkedin.com/in/andrewjackson" isExternal>
                  <Icon as={FaLinkedin} boxSize={6} />
                </Link>
                <Link href="https://twitter.com/andrewjackson" isExternal>
                  <Icon as={FaTwitter} boxSize={6} />
                </Link>
                <Link href="https://github.com/andrewjackson" isExternal>
                  <Icon as={FaGithub} boxSize={6} />
                </Link>
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="container.lg" py={16}>
        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="lg">I am a passionate software engineer with expertise in web development. I love building interactive and user-friendly applications using modern technologies. I am constantly learning and exploring new ideas to enhance my skills and deliver high-quality solutions.</Text>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <Box>
              <Image src="https://images.unsplash.com/photo-1646723907212-a61af18b6884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzExOTEzODUwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Project 1
              </Heading>
              <Text>Description of Project 1</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1531986362435-16b427eb9c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMTkxMzg1MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Project 2
              </Heading>
              <Text>Description of Project 2</Text>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3MTE5OTU4OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" mb={4} />
              <Heading as="h3" size="md" mb={2}>
                Project 3
              </Heading>
              <Text>Description of Project 3</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Contact Me
          </Heading>
          <Text fontSize="lg" mb={4}>
            If you have any questions, ideas, or opportunities, feel free to reach out to me. I'm always excited to connect with fellow developers and collaborate on interesting projects.
          </Text>
          <Link href="mailto:andrew@example.com" fontSize="lg" fontWeight="bold">
            andrew@example.com
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
