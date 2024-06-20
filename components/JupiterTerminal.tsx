"use client";

import Card from "@/components/Card";
import { TOKEN_ADDRESS } from "@/data/config";
import { useEffect } from "react";

const JupiterTerminal = () => {
  useEffect(() => {
    (window as any).Jupiter.init({
      displayMode: "integrated",
      strictTokenList: false,
      integratedTargetId: "integrated-terminal",
      endpoint:
        "https://mainnet.helius-rpc.com/?api-key=27e10c37-4efe-41d0-b99d-9c48503a65d2",
      formProps: {
        initialInputMint: "So11111111111111111111111111111111111111112",
        fixedOutputMint: true,
        initialOutputMint: TOKEN_ADDRESS,
      },
    });
  }, []);

  return (
    <Card>
      <div id="integrated-terminal"></div>
    </Card>
  );
};

export default JupiterTerminal;
