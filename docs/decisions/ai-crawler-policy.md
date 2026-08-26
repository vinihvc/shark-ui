# AI crawler access policy

## Decision

Shark UI allows public documentation and `/llms.txt` to be accessed by search and user-requested AI fetchers. It continues to restrict model-training and broad dataset crawlers. The `/view` preview surface remains denied to known AI crawlers because it is an expensive, noindex iframe surface rather than a discovery page.

## Rationale

The docs site explicitly publishes an LLM-friendly index and benefits from referral traffic and citations. OpenAI documents `OAI-SearchBot` as the crawler used for ChatGPT search discovery and distinguishes `GPTBot` as the training opt-out. Anthropic distinguishes `ClaudeBot` (model development) from user and search agents. Perplexity documents `PerplexityBot` for search results and `Perplexity-User` for user-requested fetches.

`robots.txt` is crawl control, not an indexing-removal mechanism. `/view` must remain absent from the sitemap and retain its page-level `noindex`; Google and other search engines need crawl access to observe that directive.

## Edge policy

| Route surface | Search and user fetchers | Training and broad dataset crawlers |
| --- | --- | --- |
| `/docs/*`, `/llms.txt` | Allow | Deny |
| `/view/*` | Deny | Deny |
| `/og`, `/api/raw/*` | Deny | Deny |

The Vercel edge rules use User-Agent matching as a pragmatic traffic control, not as an authentication boundary. Revisit the bot list using vendor documentation whenever the policy changes.

## Sources

- [OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- [Anthropic crawler policy](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity crawler policy](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
