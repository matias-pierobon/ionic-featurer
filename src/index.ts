#!/usr/bin/env node
import * as yargonaut from "yargonaut"
import * as yargs from "yargs"
import { FeatureCommand } from "./commands/FeatureCommand";
import { PageCommand } from "./commands/PageCommand";

yargonaut
  .style("blue")
  .style("yellow", "required")
  .helpStyle("green")
  .errorsStyle("red")

yargs
  .usage("Usage: $0 <command> [options]")
  .command(new FeatureCommand())
  .command(new PageCommand())
  .demandCommand(1)
  .strict()
  .alias("v", "version")
  .help("h")
  .alias("h", "help")
  .argv
