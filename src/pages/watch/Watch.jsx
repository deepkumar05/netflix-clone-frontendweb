import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://doc-0o-70-docs.googleusercontent.com/docs/securesc/o74eo9nj0qca2knurlppsq0dc16edfus/4fv89cff3neuf3rrfqpcnc4s00bk4g2d/1669818450000/04745103616071247862/04745103616071247862/1AiX2nZCU9J8zSULMYNM4BuZMbm-JNwts?e=download&ax=AEKYgyQEVnf2CDg22pR9ELpG0d-M8v06r_tQZIdI6yhgjnfz8a-PhXzkvHiN9FU45mguT6rxWWPVU3CNlNpC-YPtR1qjbuOEQxeGAoQZ0K3_CJb-0MXBYxgfNymoMyZD_B5jTavewSJxZKjC1LH-GgEcOlncBJ4p_zl1-CvmdD7WQfbBSXf6GhBFrR7AEbj-9ULaJdQkdr9A1C-JUdmvpdX0neMeFFCeKC9C7RQ_JryaHHbUeVadWCR1poQTQYWA_72yiu5Yl82gKGAS6K4gZSK8Ef9oMmnpU-0BpLkGholpygJkQHIB9ZZGCm0qQVXVjeyhxa9qAy8Jtv2b9b2b1t7YxF88LvHTFS13JFQSSqx_Ekl4gBtnE8_8jEMCDmW1qshZtEEjf_zZsLZFcnkI53VJ0w9pPSswFebKJibhVyrEJcT4Gct4fWcxCb1rGkBqaJBaK1fkfmLPJVLqQPGmDzB_klMZyUf8VTTvC-_KqMpRuRI3-sCy67jCPRHl7ugzhqF_yWYNRB1xrf4UHm6ejo48D_ul7iV-vxAeViah7OHPol6hINFkTxx9rLZNigWhH6LEC0T4kI8-_Sqhq6uMGH1-0ktgXwHOJGVZVAWR0jPjGM58fnqHPc8bV4de1NgtyECIo4exGZAMCioRLo3nWLxwcGGvmRdun1BuGIQ7cN3YikkmN5GNTAIbbGQmEMBKhH_lAf9pgbPZ4wm3UoF19Gh_yRxpS1mLaoKXs32GgxFQC9J4vMeGeRCj7X2YJKaNg9lgczlto_9JeEr3PQjCoe--49zvAFtnYQx8FOV4VHLXINgataFiLlRMb3z9P7LZKBcM4-qBo4DGIRe_MPNV7u_DRcShO7wrdn0sVqnd0ZjGxiydpM4ablcxfv_17DX02XczsV9EIAsXwV_XDMnmHYkz_4AnPAk64C_z8OWgZpMA0lUCQGYvmIak7wJWbn9Q8oqas9RemDK89Fqw&uuid=2d4779e2-06a6-449d-af2e-9a0f0fae1385&authuser=0&nonce=3rq3j567vf1o8&user=04745103616071247862&hash=2cqspu88p7ep6fqvupgktncvfsks71s8"
      />
    </div>
  );
}