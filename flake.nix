{
  description = "A basic flake with a shell";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [ pkgs.bashInteractive ];
          nativeBuildInputs = [];  # only necessary for developing Nix/OS packages and modules
          buildInputs = with pkgs; [
            # common build inputs
            lsd
            fd
            tig
            #git
            # project-specific build inputs
            #bun
            #deno
            nodejs_20  # v20.12.2 (in nixos-unstable)
            yarn-berry  # most recent version 4.1.1, package `yarn` is deprecated
          ];
          env = {
            #DENO_BIN="${pkgs.deno}/bin/deno";
            NODE_BIN="${pkgs.nodejs_18}/bin/nodejs";
          };
          shellHook = ''
            #import user shell config
            [ -x ~/.bashrc ] && source ~/.bashrc
            [ -x ~/.zshrc ] && source ~/.zshrc
            [ -x ~/.aliases ] && source ~/.aliases
          '';
        };
      }
    );
}
