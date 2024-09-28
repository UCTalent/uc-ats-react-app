import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import TypographyHtml from "components/common/TypographyHtml"
import BasicTag from "components/common/tags/BasicTag"

const TAGS = [
  { id: "1", title: "Javascript" },
  { id: "2", title: "React" },
  { id: "3", title: "Node.js" },
  { id: "4", title: "Express" },
  { id: "5", title: "MongoDB" },
  { id: "6", title: "PostgreSQL" },
  { id: "7", title: "MySQL" },
  { id: "8", title: "Redis" },
  { id: "9", title: "PostgreSQL" },
  { id: "10", title: "MySQL" },
  { id: "11", title: "Redis" },
  { id: "12", title: "PostgreSQL" },
  { id: "13", title: "MySQL" },
]

const TheJobCandidateSummaryPage = () => {
  return (
    <>
      <Stack
        gap="12px"
        sx={{ pb: "24px", borderBottom: "1px solid", borderColor: "border.outlined" }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
          Technical project manager & Product owner
        </Typography>
        <TypographyHtml>
          - 10 years of experience on Desktop, Web and mobile Apps (Manage - Develop - Design).
          Shopify Plus - Shopify - php - Laraval – CodeIgniter - html5 – css3 - NodeJS - MYSQL –
          AngularJS – Jquery – Javascript - Kajabi - liquid programming - AWS - Wordpress - VUE.JS -
          API - Swift - Android - PMP. - Product owner - Agile - Confluence - PM Tools : Jira -
          Basecamp - trello - Asana - Monday - Git - Apps development ( Heroku - NGROK - Docker -
          Cloudways - Graph/QL - Laravel - Node.JS - Shopify CLI - SSH - Tailwindcss - Alphine.JS -
          NPM - Shopify Apps - Xampp ) VCS : Git - GitHub - Bitbucket - 10 years of experience on
          Desktop, Web and mobile Apps (Manage - Develop - Design). Shopify Plus - Shopify - php -
          Laraval – CodeIgniter - html5 – css3 - NodeJS - MYSQL – AngularJS – Jquery – Javascript -
          Kajabi - liquid programming - AWS - Wordpress - VUE.JS - API - Swift - Android - PMP. -
          Product owner - Agile - Confluence - PM Tools : Jira - Basecamp - trello - Asana - Monday
          - Git - Apps development ( Heroku - NGROK - Docker - Cloudways - Graph/QL - Laravel -
          Node.JS - Shopify CLI - SSH - Tailwindcss - Alphine.JS - NPM - Shopify Apps - Xampp ) VCS
          : Git - GitHub - Bitbucket
        </TypographyHtml>
      </Stack>
      {/* Skills */}
      <Stack
        flexDirection="row"
        sx={{ mt: "24px", pb: "24px", borderBottom: "1px solid", borderColor: "border.outlined" }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: 600, minWidth: "196px", maxWidth: "196px" }}
        >
          Skills
        </Typography>
        <Stack flexDirection="row" sx={{ gap: "6px", flexWrap: "wrap" }}>
          {TAGS.map((tag) => (
            <BasicTag key={tag.id} sx={{ fontWeight: 700 }}>
              {tag.title}
            </BasicTag>
          ))}
        </Stack>
      </Stack>
      {/* Language */}
      <Stack
        flexDirection="row"
        sx={{ mt: "24px", pb: "24px", borderBottom: "1px solid", borderColor: "border.outlined" }}
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: 600, minWidth: "196px", maxWidth: "196px" }}
        >
          Language
        </Typography>
        <Stack flexDirection="row" sx={{ gap: "6px", flexWrap: "wrap" }}>
          {TAGS.map((tag) => (
            <BasicTag key={tag.id} sx={{ fontWeight: 700 }}>
              {tag.title}
            </BasicTag>
          ))}
        </Stack>
      </Stack>
    </>
  )
}

export default TheJobCandidateSummaryPage
