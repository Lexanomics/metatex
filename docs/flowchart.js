graph TD

  subgraph Input
    A[Raw FASTQ Files]
  end

  subgraph Quality_and_Host_Removal
    A --> B[fastp - Quality Control]
    B --> C[bowtie2 - Host Read Removal]
  end

  subgraph Taxonomic_Profiling
    C --> D1[Kraken2]
    D1 --> E1[Bracken - Abundance Estimation]
    C --> D2[MetaPhlAn]
  end

  subgraph Genome_Assembly
    C --> F[metaSPAdes - Assembly]
    F --> G[Contigs.fasta]
  end

  style A fill:#f9f,stroke:#333,stroke-width:2px
  style C fill:#bbf,stroke:#333
  style D1 fill:#ccf
  style D2 fill:#ccf
  style F fill:#cfc
  style G fill:#dfd
