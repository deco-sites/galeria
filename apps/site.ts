import blog from "./deco/blog/mod.ts";
import website, { Props } from "apps/website/mod.ts";
import manifest, { Manifest } from "../manifest.gen.ts";
import { type App as App, type AppContext as AC } from "@deco/deco";
type WebsiteApp = ReturnType<typeof website>;
type BlogApp = ReturnType<typeof blog>;
/**
 * @title Site
 * @description Start your site from a template or from scratch.
 * @category Tool
 * @logo https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8
 */
export default function Site(state: Props): App<Manifest, Props, [
  WebsiteApp,
  BlogApp,
]> {
  return {
    state,
    manifest,
    dependencies: [
      website(state),
      blog(state),
    ],
  };
}
export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";
