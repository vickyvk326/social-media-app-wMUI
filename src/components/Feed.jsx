import { Box } from "@mui/material";
import FeedContent from "./feed/FeedContent";
const feedImages = [
  {
    name: "Big temple, Thanjavur",
    date: "July 15,2023",
    description: "Wonderful view of historical temple of lord Brihadeeswara.",
    img: "https://lh3.googleusercontent.com/pw/AIL4fc--yte1TEZbUN_Zt8wi1FNzsVlw7IPAUioizY-nrj3AxSySwFzjwyA4GxjU6V2vsmfXA7KwbTH8zPqHlOnI57g_qi6Lj2P1_d8DRgdl6hrT4au6hUjrlhZEfYHakGHj7JSpcBlw9a5_jtyAhUroVyhqjgQnR1CdklLlo8IWxVLMLkvs5fToRTPjUIcwdScPBvHE8EKjOjN8A2VOhb3LrNFvNOwizU3fL-18wmOcYsCw5HjLN0yF9nzJeoEQekQtOROAdd6PUTgy5y3HyacbOhUAGkBL1mh7wstQqcSM7GdP-hb4kwRI6TLDB8ko4PKT84a48nJOALVgij9UQ0nlL3D3Ck1v6QgcgfreZEwdnKJXAiZcoE4Qd-CJIIaUCubJknTpszhI-iDv5NE1kxpVR4mIRQcwS841IGGvtI3ak-KlrzNz4gU3fFApo772Y4Y7mGJQzaJOqz6aaf-vOIjEQgpiwecanuQVZ5P0lw5hIA3IUMM7dLLdFQYmRG8O-zb63cxC7A_9QBAFt_8QG2b1p_QpLHjnHA-lpxaXmoJka_ziIoe7tUkY4CWieys1G8tzr5rl23YBMjpVBa1iD6fk1i5_LDLRAxK8wha0eLvVmb_owHyoXYJ_huOFIKfVqS7vI60eQaSq5_ijy9Bo1vUCnoTxCUMAm_fDLW_M8BBf57Ollfhvh5s_q_hPHY6mo2PPnE2pXF-DQ2g1CjfJEcBoKjAeMEpig0VO6ybldsTB6Z1Q7vD0JILcJ3zuVWK39e2F25sg4yCyg42wWCTCAzhROV6raag_ce3PveSCvNQugaUHmcFGI1XcnmBDSeX2WjR0IBh36fWtrLtWIZCAneLBZf1ddeC929ZeG_iu-BGu8E_pYSamd6UPEW_sMoJa_KQ-9OdAP9sYj3fbE7ojWTfV8zOWGuITE0mUSgpOr46gQhHem4q9vqmY_8j7Xz58M2c=w488-h651-s-no?authuser=0",
  },
  {
    name: "Manikkampillai nagar,Sunnambukkara street",
    date: "August 8,2022",
    description: "A stunning night view from Guna's colony Roof top.",
    img: "https://lh3.googleusercontent.com/pw/AIL4fc_mmMlY2sdN09wjqmijhc4Z_DfPEUa0AbJ2UULQFDlEUODixSfA3BpsO5eGbqJU26iHVM2MteXQ_kOGl1x9uRodptfN2Jze3pGJkjzvXyTMSAHpfgesqm1qnmTM2E9ZjDkpxxdtPDwRShqcMsYQMYJiLyf01Ab2C-JeL_o6-mN-ZGM3qz9-ffXIYSpSWlNlRWXIfi10LGGuheZAR7gKMMJg7Q1mOutFeKGrYah3z5pCOwYl4XgfdtOLtV-gVZ2EkV--wqcAjwmfzKr84Lk3lBHV5yP6EH1Fkf6E1QEnhpofle5SCNw_uERb45-aGSDNo5yosJV3s9hIuibeffGkux1DVSXOJW3YXVZBNnvuF_uas-rQ61KqOLxxz51ujt6KjkO8TnmmicVLQ1KfD5DSbKB_4J9d3RYlRRd5PmZL4-F0XbUZpSJdp1C94o2wbb9jcdIxWziYKX5Gvq8ELAy7HocBIQGyVXvFNS00Xgb79m4iI-2II1n6dP8UITKHkGDLPudSVMT9iFuCluc_wkHknyMzdd4NVLWIDWWyO3DXYN5rXMy_9HujuvkAFzmo0ovbCn9BjDcf_lryEh3OQ4PXFZbq3luXR99GUeWDl85cdmU90n-MulaosCXxdJDJSrnB_bfU0wlLUCef9lIr_56ZRGzGjwjVymbDHtDG2JLf4HQJjIl5MRjO_sFm_dqDZbgVoyNSCMvC2BNiF1nQBkOwlgJKbq8PsFlTFIY3LrVefmynXoJfwRPU8bWDT8MvMI9nJ1m0BS_89U9bAXgsD6cftlRP1ipcEytmgvZWmL0H4hjjKO1XEP93nosIXlFVMEix7-B_Z-zaQjdwCvQml4R8xVIaQ2GZ_nMso_iEzuuCxTdkLj320gnarYzjv9liBZXV3v0UyHU23BYwbul2BHLmknxixc-X1tBf7U5A_c9NRcv60ho4SiLm0k1o5IXisk4=w868-h651-s-no?authuser=0",
  },
  {
    name: "Big street,Pattukottai",
    date: "March 25,2023",
    description:
      "An awesome night steet photography of Big street, Pattukottai.",
    img: "https://lh3.googleusercontent.com/pw/AIL4fc9ozLIrqTK-fZIfH3RSWXEPsIq8WldwdCkZSxj7Zc5IJ8g4yPdMyj7mkRyhr-A_7u0QGMcLjzY2tF6vWN57PFRupCcZZgiyWP5_A8bsBGCc9hgpYmes2z0EGDG1EwT-u0Jiv6ZmtkyQtBAR3_-KmDnyu16R4YFx1oT63tqvTAbkRsyNCv708Q7P8G2Ryyki1MhHet6APXFHJoITjI0HMGW4O2ARyGTcRoUP75LYk2ar5OdU76mnnD5W_xiOhumu-9n-oPOWSEF3_jRXsGuMOUj7VX_KgotWAdLGMnCrNRvdjkpl6PhN5XiabD4XMAoJaItTBXrwrmtC7S6ywmzkYh2gQhoTN20_MdOPBZCARE5LInTLdAAX66pbLtUOmI-go2D5RzIOC07Jx_THj5AtEiEsAUuvclQQX9RbWnS0kFW5WWwSi0bac55c0SrsNbwoTh6p9F2pKsZbz7l4QcR3X5ldCM2Rs6lS-6tRHjDApN7VIbmKE1nsmd-F3FhzIyJKMAIltxDegSWM5HDK6Im7RMsU2qRq37GMSZjnSGaZs3qjKeQVR_lOj0T6uhhuPDzZWKeXPqVnmaDyyr0WsvRDSCFEwt5UfsuX3lkc02z6PlM4R8Fjg0GM5GPyGDQtLW26qC6exyzkvZ5vQjNxGHGgSvHLNnJFFDokRB8Y0jT0ffRhCcLfDRoZNyZMSPsXzlgdS-BWm27z3ENwcOeHZBrjFTZJYDvsssIWGCPLsIQfyERXJV_zz5V6crK4nsPh_Vs3a_ooxIJop7hS10354IsXXJExrg6hxaLUsJiHE-amruvM_3mV8b-fWcHDGaEs4IsTArvIviQrddAk6J4b9MFs3ShMygos6erFNX-C55--8-_KRied6pfUOSyK08ByG7lPdbuQUZIklVIFkuFNcEiqsK0On61kTN6mj3QzMa8RCEa_-wSWzhn7azwnEOJx4gE=w488-h651-s-no?authuser=0",
  },
  {
    name: "Harbour,Mallipattinam",
    date: "June 21,2023",
    description: "An average morning in the harbour of Mallipattinam.",
    img: "https://lh3.googleusercontent.com/pw/AIL4fc8ylaSkSGRD2inG4zEuTzElXOV9iuc2vJ1GhYvjcBGV9a4w30PUnFRZ9Q2yhvghnOwNkoDujjdY5id74O4snw8gzoLxMpm6b7Xc0rg8d4MU9-Lv34XpiyC81VAtizzwWQ51_JPnElWiyeX796xJx642iEcdIAq-n5MPJxdYpOqboPizHP8y4kjfOOvxSSoij9MiBh-Lidx-cpplvUEp8TyGJ_5h7AG6WfdBF4ZJn-dG7mGqYXrlk4IL2bkLPPLfEQX9ZXSFMeVIL0NFFM-OaQyuPOcjhrCa02qFex3Nglxc2wOHNmFssCr_LHnBUtJDorZ94_oA4Ykc6vmByCITAmdCKU9kUvsRY-dTXhfEYJg7zvi4tL1X6Y0sNgPPl4ErAm8_rJTfE1lbeeew2PZnr2iMh8dBlo71wVObeHBgHyvncQEDxCiTK7T6Bx4v-RRm4kYVUDN4pABpXLQV9x5bmyneWCC-CnXGzjT-_vpV3Wo1uAOROU6hOG8I0KueuTfKA2C0w7D5Fh6Cri1cDMA996Tet24HewrfaV6YLp2-7v3y_6CyRdLAJ7JeGXm2GI7viGq4zDM52FWvOq1wHhgod_WgO56k9Mfl9wv9Gwxpn2KrSr6VmvEM3ef4sxKWn4mvbRzrUEUI3We_pzf09EFxQu04qdc9Okfp6pvC11_9ByocPaHpDB5Lg-Hmdk03jf1Ys68A2hG3BBu43_lB_ITsp0HYDgxfc7pKB9QbUTw5je1KRQeLEQY31AP_UhsbxySZH73quyM-IwSLf3pMuBiSKiUjsfTqKlwI5MtuTES19EOmed_M42pEefLwmWFC-Sp3qtTG7pBThyGen1d5-hETY3jV4ExD2WXBXExWr1DLOu-r9Rk0479m1EsvZUbsT_vbFg645BoLrLNpmnUzzyplfHCA3_xHT4K1ughFDy6UjS4gbyyFoekvdd3EKWqf7kM=w868-h651-s-no?authuser=0",
  },
  {
    name: "Nadiamman temple,Pattukkottai",
    date: "April 12,2023",
    description: "Nadiamman festival picture with crowd of Pattukkotai people.",
    img: "https://lh3.googleusercontent.com/pw/AIL4fc-SNJav6kY-DMYasUL3IBcihNTWJrg0ISmjm2B_cdOyNk2Ix2PYQC2dY_nYNepPkwf0AImblaXq8zs0wa8IsdxLI5AZas_KNzDpVaBDhQ4MAlvN4eex6U9bzZF6FsfY75Y0FpV-cyBAK1popz9TlzFCg-mjhwo6YkRgxQNUjWDomI8PXe0Zga7WdZ9Z3ZK7AYWPISuse_BqpzwjAfIHNr8_x1S1nixQok-QxHawQpmkQCrRFlldZglh6yxBWQTfYluj5F_Wmf8aOnU3lUFGymtmrsKKKr-EZcKKhXpYDLRdi4bjrMX7Lg94-GmOrEmVw-OsY5r0MCW4XBhZsQK58yEQdoxXA9FQ8N7Gl1cEfAbCPbT5fRutJ_jYTQC9syW4hvSXVvSu56y3GdOO275qKIkyQIOcnH6RZr0urhsAkgVQc-K_xxtemylBAjPmVGHeZv_xfGKjrzVcBZzwez9nK2EIhEwaOKBPXRnASeZJQ7yFHdgYwFp5R9Mp9H6eUeXczrwaOHqGBtOzo0HTn-L63BR6SA2nR0ly_c1gLPbvei2KZMnLlAHwiteSBCBCric3WjhKql_38faA7Zvz6IvWFQB5oBlxTOVeloPkZbHEtVs_PVmJ5_SxzbahjCOyiX8iB15n2RFA2fFyOYhaM8aXkop_3jAYz5gA6PbYHbriQoucGrBqbEsh4ZjENQtmeNXxQox-oiqWT_SEciqYGAgofTeoBqTt9-6EeOnGYQhyiSqV0lrNG_URKMHxPgNxpKqeOg6gtUkc4pvBY2roWu0None2IGNZo0Eg5oNeo0jKQr1js1GIDPbldyVLqes_j9bBAXzTRB_Q-SVgPLenshrUW-t6EPdE6x8mgzGYFy4ST3XWQVav7nRkrArC67ntaG2Quu2pTP4KOFk-3AtL_m0r7o6_W3dl7DIQy7JrrQyX1Nz0IVdmxtbVF-khde46jgg=w488-h651-s-no?authuser=0",
  },
  {
    name: "Light house, Manora",
    date: "January 1,2023",
    description:
      "The fort was built by Maratha ruler Serfoji II in 1814–1815 to commemorate the successful advance of the British over Napoléon Bonaparte. ",
    img: "https://lh3.googleusercontent.com/pw/AIL4fc_u08N3qwmwKZgdDtH1noWa7MjvSf1aLk3MVKnOJUHqlNzGBsJymHchfPpt5VrAnIyARrVsstPqEvJIKVVYJfIBWQgDE6_XmEqYoeiwN60JbldNVyApD4qfjze6EzqxghfkqQVRr5Jdy-pc6uTSbDCFrEiQFQlor06Eo-LLjs46QEoZwCeQXQjuJG4n7wCHaSA97NAwm644NJQNbw6H_IekiIgUb7V7092Zc_KnfUKBk7m1NCjS5iW2ByTNjvh8GXN8eJNPTa2KgaxxTQmOJzLpN68_G6vA1WDpJXtaUurgBDjGDouk_B3e1XrQ_0Pqs2TofwGvD8MqMF7pKXMAt7k2XRn_07L5qtPcV2JxjmiGiYIX88BTTPrIi_ljpYcyxv0Oo55-8OYenZlKh3RrlNU8yeRpy7KFNBzzCeIJ6DO7SVKtYFKkM-ohbFWoOlUS60LtQGs8pHAwFTBErSOkXiK79WHO6VXjlHhUxzcSIaqL-5MR2R54WF1-PDY_YOttl9JVk5guA2UUzmIRWnlk7WsXjWwtstIhzXXQHBu-m7KloLQHJ3X2Y5WhWOU_7v961Nmf-v4D2Qg6-Vns_Ib2ReZmKKYWbspqdXLZdQaF6mO9dobt7kfUbwtp6IMunsYd1S51vk7cBY8uX46mhttmGg9bhATetC4gYT_THnF2X2txOVr0e4NibBcOeDeUi9U7rZTzBgwfHdy9nU7bEkgmobxiYXtZM-zX5a9Sqq2KJIykczfJzX17pF4jZCLcf4wGleBKME_eoog8KhT_X6BAO_9EqjActRPmOZIMhFJzfTZg1vjTblZm2p2iS6IcrxwvhMXPTB_30Z13pmnboaDljqmdp6ILx5ZyCyxfzInl3g4UG8tAFG8m5HGsQBugWoa3sZAf1DbJfgadZwswjfw-iPEkqJ4WfdwX4EhI05Idr09Gv06Z7KzV7W_YdcQ_z3g=w366-h651-s-no?authuser=0",
  },
];
const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {feedImages.map((feedImage, index) => (
        <FeedContent image={feedImage} key={index} />
      ))}
    </Box>
  );
};

export default Feed;
